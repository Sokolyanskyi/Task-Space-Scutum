import styles from './Pagination.module.css'
import classNames from 'classnames'


export const Pagination = ({paginate, currentPage, maxPageNumberLimit, minPageNumberLimit, pageNumbers}) => {


  const renderPageNumbers = pageNumbers.map((number) => {
	if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
	  return (
		 <div className={classNames(styles.pageItem, number === currentPage ? styles.pageItemActive : '')}
			  key={number}>
		   <a href="#" onClick={() => {
			 paginate(number)
		   }}>
			 {number}
		   </a>
		 </div>
	  )
	} else {
	  return null
	}
  })
  return (
	 <div className={styles.pagination}>
	   {renderPageNumbers}

	 </div>
  )
}