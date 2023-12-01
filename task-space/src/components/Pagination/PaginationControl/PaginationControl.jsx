import styles from './PaginationControl.module.css'

export const PaginationControl = ({nextPage, prevPage, currentPage, pageNumbers}) => {
  return (
	 <div className={styles.container}>
	   <button className={styles.left} onClick={prevPage} disabled={currentPage === pageNumbers[0]}><img src="/left.svg"
																										 alt="left"
																										 aria-disabled={currentPage === pageNumbers[0]}/>
	   </button>
	   <button className={styles.right} onClick={nextPage}
			   disabled={currentPage === pageNumbers[pageNumbers.length - 1]}><img src="/right.svg" alt="right"/>
	   </button>
	 </div>
  )
}