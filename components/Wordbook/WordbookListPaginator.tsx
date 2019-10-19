import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import '../../styles/components/wordbook/wordbook-list-paginator.scss';

const WordbookListPaginator = ({ totalPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const page = +router.query.page;
    if (page) {
      setCurrentPage(page);
    }
  }, []);

  const handlePaginationForList = (event: any) => {
    event.preventDefault();
    const pagetarget = event.target.dataset.pagetarget;

    if (pagetarget === 'first') {
      router.push('/wordbook');
      setCurrentPage(1);
    }
    else if (pagetarget === 'left') {
      if (currentPage === 1) return;
      const target = currentPage - 1;
      setCurrentPage(target);
      router.push(`/wordbook?page=${target}`);
    }
    else if (pagetarget === 'right') {
      if (currentPage === totalPage) return;
      const target = currentPage + 1;
      setCurrentPage(target);
      router.push(`/wordbook?page=${target}`)
    }
    else if (pagetarget === 'last') {
      setCurrentPage(totalPage);
      router.push(`/wordbook?page=${totalPage}`);
    } 
    else {
      return;
    }
  }

  const handlePaginationForAccount = (event: any) => {
    event.preventDefault();
    const pagetarget = event.target.dataset.pagetarget;

    if (pagetarget === 'first') {
      router.push('/account');
      setCurrentPage(1);
    }
    else if (pagetarget === 'left') {
      if (currentPage === 1) return;
      const target = currentPage - 1;
      setCurrentPage(target);
      router.push(`/account?page=${target}`);
    }
    else if (pagetarget === 'right') {
      if (currentPage === totalPage) return;
      const target = currentPage + 1;
      setCurrentPage(target);
      router.push(`/account?page=${target}`)
    }
    else if (pagetarget === 'last') {
      setCurrentPage(totalPage);
      router.push(`/account?page=${totalPage}`);
    } 
    else {
      return;
    }
  };

  return (
    <div className="wordbook-list__paginator">
      <div className="paginator-container">
        <div className="wordbook-list__paginator--first" 
          onClick={
            router.pathname === '/wordbook' ? 
            handlePaginationForList : 
            handlePaginationForAccount} data-pagetarget="first">
          1
        </div>
        <div className="wordbook-list__paginator--left" 
          onClick={
            router.pathname === '/wordbook' ? 
            handlePaginationForList : 
            handlePaginationForAccount} data-pagetarget="left">
          <FaAngleLeft className="left-arrow" data-pagetarget="left" />
        </div>
        <div className="wordbook-list__paginator--current">{currentPage}</div>
        <div className="wordbook-list__paginator--right" 
          onClick={
            router.pathname === '/wordbook' ? 
            handlePaginationForList : 
            handlePaginationForAccount} data-pagetarget="right">
          <FaAngleRight className="right-arrow" data-pagetarget="right" />
        </div>
        <div className="wordbook-list__paginator--last" 
          onClick={
            router.pathname === '/wordbook' ? 
            handlePaginationForList : 
            handlePaginationForAccount} data-pagetarget="last">
          {totalPage}
        </div>
      </div>
    </div>
  );
};

export default WordbookListPaginator;