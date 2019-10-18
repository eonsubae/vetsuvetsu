import Head from 'next/head';
import nookies from 'nookies';

import '../styles/components/account/account.scss';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import WordbookList from '../components/Wordbook/WordbookList';

const Account = ({ user, wordbooks, totalPage }) => {
  return (
    <div>
      <Head>
        <title>Vetsu X 2 - Account</title>
      </Head>
      <main className="account">
        <section className="account-info">
          <h1 className="account__user-name">{user.name}님 환영합니다</h1>
        </section>
        <section className="account-wordbook-list">
          <article>
            <WordbookList wordbooks={wordbooks} totalPage={totalPage} />
            {/* {wordbooks.map((wordbook, idx) => (
              <div key={idx}>
                <h2>{wordbook.subject}</h2>
              </div>
            ))} */}
          </article>
        </section>
      </main>
    </div>
  );
};

Account.getInitialProps = async (ctx) => {
  // user
  const cookies = nookies.get(ctx);
  const token = cookies.token;
  const userUrl = `${baseUrl}/api/user`;
  const userHeaders = { headers: { authorization: token } };
  const user = await axios.get(userUrl, userHeaders);

  // wordbook
  const wordbookUrl = `${baseUrl}/api/account?id=${user.data._id}`;
  const page = ctx.query.page ? ctx.query.page : '1';
  const size = 5;
  const payload = { params : { page, size } };
  const response = await axios.get(wordbookUrl, payload);
  const { wordbooks, totalPage } = response.data;

  return { user: user.data, wordbooks, totalPage };
}

export default Account;