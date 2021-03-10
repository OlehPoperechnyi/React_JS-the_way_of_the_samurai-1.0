import style from "./Pagination.module.css";
import {useState} from "react";

let Pagination = (props) => {
    let totalPages = [];
    let [currentBlock, setCurrentBlock] = useState(1);
    let currentSize = 10;
    let countItems = Math.ceil(props.totalCount / props.pageSize);
    let lastBlock = Math.ceil(countItems / currentSize);
    for (let i = 1; i <= countItems; i++) {
        totalPages.push(i);
    }

    return <div className={style.pageCounts}>
        {(currentBlock > 1) &&
            <span>
            <span className={style.nav}
              onClick={() => (setCurrentBlock(1))}>
                    {`<<`}
            </span>
        <span className={style.nav}
              onClick={() => (setCurrentBlock(currentBlock - 1))}>
            {`<`}
        </span>
            </span>
        }
        {totalPages.map(n => {
                if ((n > (currentBlock - 1) * currentSize) && (n <= currentBlock * currentSize)) {
                    if (props.currentPage === n) {
                        return <span className={`${style.pageCount} ${style.active}`}
                                     key={n.id}>{n}</span>
                    } else
                        return <span className={style.pageCount} key={n.id}
                                     onClick={() => props.setPageCount(n)}>{n}</span>
                }
            }
        )}

        {(currentBlock < lastBlock) &&
        <span>
            <span className={style.nav}
                  onClick={() => (setCurrentBlock(currentBlock + 1))}>
            {`>`}
            </span>
            <span className={style.nav}
                  onClick={() => (setCurrentBlock(lastBlock))}>
                    {`>>`}
            </span>
        </span>
        }
    </div>
};

export default Pagination;