# Vetsuvetsu(別別)
> Make your own wordbook(자신만의 단어장을 만드세요, 自分の単語帳を作りましょう)

Project homepage　:　https://vetsuvetsu.now.sh/

관심있는 주제 혹은 공부중인 책의 단어들을 한 데 묶어 편리하게 공부하세요

(関心がある主題あるいわ勉強している本の単語を集まって便利に勉強しましょう) 

## 프로젝트를 시작한 이유(プロジェクトを始めた理由)

일본 취업을 위해 8월부터 어학원을 다니며 일본어 공부를 시작했습니다

(日本で働くために８月から塾で日本語の勉強を始めました。)

외국어를 잘하기 위해서는 무엇보다도 기초적인 어휘량을 늘리는 것이 중요하다고 생각합니다

(外国語が上手になるためには何よりも基礎的な単語の量を増やすことが重要だと思います。)

이를 위해 학원에서 가르쳐주는 어휘들을 열심히 공부하려고 노력했습니다

(そのために塾で教えてくれた単語を熱心に勉強すると努力しました)

그런데 학원에서 배운 어휘들을 바쁘게 받아적다 보면 수업이 끝나고 나서 알아보기 힘들어지는 경우가 많았습니다

(しかし、塾で習った単語を熱心に書き取ってみたら授業が終わった後で見にくい場合が多かったです。)

예를 들어, 아래의 사진과 같은 경우들이 많았습니다

(例えば、下の写真のような場合が多かったです。)

![勉強した本の姿](docs/img/book1.jpg)

그래서 공부한 단어들을 편리하게 보기 위해서는 매번 다른 공책에 단어들을 옮겨적는 작업을 반복해야 했습니다

(そうして、勉強した単語を便利に見るためには毎度他のノートに単語を書き直す作業を繰り返しなければならなかったです。)

예를 들어, 아래의 사진과 같이 단어들을 한자, 요미카타, 한글의미 순으로 정렬해가며 정리했었습니다

(例えば、下の写真のように単語を漢字と読み方と韓国語の意味の順に並べ替えながら纏めました。)

![纏めたノート](docs/img/note2.jpg)

그런데 이렇게 정리한 단어노트가 점점 늘어나자 다른 문제가 발생했습니다

(しかし、こんなに纏めた単語ノートがますます増えるのはほかの問題を発生させました。)

정리한 노트의 양이 지나치게 늘어나서 책의 두께 이상이 되자 휴대성이 급감한 것이었습니다

(纏めた単語ノートの量が増えすぎて本の厚さ以上になって携帯性が急減になりました。)

![纏めたノートの量１](docs/img/note1.jpg)

![纏めたノートの量３](docs/img/note3.jpg)

그래서 휴대성있게 단어를 공부할 수 있으면서, 동시에 시험까지 만들어주는 프로젝트를 해보면 어떨까 생각하게 되었습니다

(そして、携帯性がいい方法で勉強もできるし、同時に試験まで作ってくれるプロジェクトをして見るとどうかなと考えるようになりました。)

## 주요 기능 1 (重要な機能１)

![Editor](docs/img/wordbook-creation.gif)

마우스를 사용하지 않고도 에디터에 단어를 편하게 입력할 수 있습니다

(マウスを使わなくてもEditorに単語を便利に入力することができます。)

한국어나 영어와 달리 Tab, Space bar, Enter가 단어 입력에 쓰이는 일본어의 특성 때문에 Caps Lock키를 트리거로 사용했습니다

(韓国語や英語と違ってTabキー、スペース・バー、エンターキーが単語の入力に使われている日本語の特性によってキャップス・ロック・キーをトリガーで使いました。)

이 기능은 과거에 자주 사용했던 Vim이라는 에디터에서 영감을 받았습니다

(この機能は以前によくつかったVimというEditorで霊感を受けました。)

개발자가 아닌 일반 사용자들도 마우스 없이 사용 가능한 에디터가 있다면 좋지 않을까라는 의도에서 이런 방식으로 만들게 되었습니다

(プログラマーではない一般的な使用者たちもマウスがなく使えるEditorがあったらいいじゃないかという意図でこんな方式で作るようになりました。)

## 주요 기능 2 (重要な機能２)

### Desktop

![toggle-desktop](docs/img/toggle-desktop.gif)

### Mobile

![toggle-mobile](docs/img/toggle-mobile.gif)

토글 버튼을 눌러 한자, 요미카타, 의미를 보이거나 안보이도록 만들 수 있습니다

(トグルボタンを押して漢字と読み方と意味を見えるようにあるいわ見えないように作ることができます。)

이 기능은 노트에 써가며 정리해서 공부할 당시 다른 종이나 책으로 한자 이외의 것들을 가리며 공부했던 것이 능률이 좋았기 때문에 만들게 되었습니다
(この機能はノートに書いて纏めて勉強していた時、ほかの紙や本で漢字以外のものを見えないように勉強したのが能率が良かったおかげで作くるようになりました。)

## 주요 기능 3 (重要な機能３)

![PDFファイルを作る画面](docs/img/pdf-creation.gif)

입력된 단어장 안에서 랜덤으로 테스트를 생성해 PDF파일로 다운로드 받을 수 있습니다

(入力になった単語帳の中でランダムでテストを作ってPDFファイルでダウンロードをもらうことができます。)

매일 아침 어학원에서 테스트를 보는 것과 같은 형식으로 문제를 자동으로 생성하게끔 하고 싶었기 때문에 만들었습니다

(毎朝、塾でテストを受けていることのような形式で問題を自動的に作るようにしたかったので作りました。)

## Skill Set（スキルセット）

프로젝트에 사용한 스킬셋 리스트(プロジェクトに使っているスキルセットのリスト)
* Typescript(Javascript superset)
* MERN Stack(MongoDB, Express, React, Node.js)
* Sass(CSS Preprocessor)
* Deployment : ZEIT NOW, MongoDB Atlas

![MERN_STACK](docs/img/mern_pic.jpg)

* MERN Stack
  - MERN Stack은 현재 발전속도가 매우 빠른 자바스크립트 생태계에서 가장 보편적으로 사용하는 기술입니다
  - MERN Stackは現代に発展のスピードが速すぎているJavascriptの生態系で最も普遍的に使っているスキルセットです。
  - 자바스크립트라는 언어 하나로 클라이언트와 서버 모두를 개발할 수 있는 것이 장점입니다
  - Javascriptというランゲージだけでクライアントとサーバーの総てを開発できることが長所です。

---

![MONGODB](docs/img/mdb.png)

* MongoDB
  - Mongo라는 이름의 어원은 humongous(huge + monstrous)로 '굉장한' 정도의 의미를 가지고 있습니다
  - Mongoという名前の語源はhumongous(huge + monstrous)で'素晴らしい'ほどの意味を持っています。
  - 데이터베이스 이름이 이 단어에서 기원한 이유는 MongoDB가 매우 많은 데이터를 저장할 수 있기 때문입니다
  - データベースの名前がこの単語から始めた理由はMongoDBが多すぎる単語を囲うことができるからです。
  - 최근의 웹환경은 과거에 비해 훨씬 많은 데이터를 저장해야 할 필요성이 생겼습니다
  - 最近のWebの環境は昔に比べてはるかに多くのデータを囲いする必要ができます。
  - 게다가 저장해야 하는 데이터는 정형화되지 않은 데이터들도 많아졌습니다
  - それに囲いする必要があるデータは定型化がならないことも多くなります。
  - MongoDB는 MySQL이나 Oracle같은 SQL과 다르게 schemeless합니다. 때문에 보다 데이터를 유연하게 다룰 수 있습니다
  - MongoDBはMySQLやOracleなどSQLと違うschemelessです。だからよりデータを悠然に取ることができます。
  - 이처럼 MongoDB는 많은 데이터를 저장해야 하는 매우 큰 애플리케이션을 위해 설계된 데이터베이스 입니다
  - これ程MongoDBは多くのデータを囲いしなければならない多すぎるアプリケーションのために設計になったデータベースです。
  - 물론 schemeless하다고 해서, SQL처럼 고정된 데이터 형태를 부여할 수 없거나 relation을 사용할 수 없는 것은 아닙니다
  - 勿論schemelessからといって、SQLのような固定したデータの形を与えることやrelationを使うことができないわけではないです。

* MongoDB의 Collection(SQL의 TABLE과 유사한 것) Schema - MongoDBのCollection Schema（SQLのTABLEと似合うこと）
```js
// User.ts
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    required: true,
    default: 'student',
    enum: ['student', 'admin', 'teacher']
  },
},{
  timestamps: true
});

// Wordbook.ts
const WordbookSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  words: {
    type: [],
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
},{
  timestamps: true
});
```
* 위 코드는 mongoose라는 MongoDB의 ODM(SQL의 ORM)라이브러리로 스키마를 정의한 것입니다（上のcodeはmongooseというMongoDBのODM libraryで(SQLのORMのように)schemaを定義したことです。）
  - 만약 SQL에서 TABLE을 정의해본 경험이 있다면 어렵지 않게 이해할 수 있을 것입니다
  - もしSQLでTABLEを定義した経験があったら難しくなく理解ができるはずです。
  - type이나 required, unique등 SQL에서 자주 사용하는 속성들을 동일하게 사용하고 있기 때문입니다
  - typeやrequiredやuniqueなどSQLでよく使うpropertiesを同一に使っているからです。
  - Wordbook의 schema의 user에서 ref를 지정해 관계를 설정하는 것도 유사합니다
  - Wordbookのschemaのuserでrefを指定してrelationを設定することも類似しています。
  - MongoDB에서는 SQL에서 JOIN을 사용해 관계가 있는 데이터들을 가져오는 것처럼 populate라는 기능을 사용해 관계가 있는 데이터들을 가져올 수 있습니다 
  - MongoDBではSQLでJOINを使ってrelationがあるデータを持ってくるようにpopulateという機能を使ってrelationがあるデータを持ってくることができます。

* MongoDB의 populate예시 코드 - MongoDBのpopulate例のcode
```js
// api/wordbook/index.ts
import mongoose from 'mongoose';

import Wordbook from '../../../models/Wordbook';
import connectDb from '../../../utils/connectDb';

const { ObjectId } = mongoose.Types;

export default async (req, res) => {
  connectDb();
  switch (req.method) {
    case "GET":
      handleGetRequest(req, res);
      break;
    case "POST":
      handlePostRequest(req, res);
      break;
    case "PUT":
      handlePutRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const handleGetRequest = async (req, res) => {
  try {
    const { page, size } = req.query;
    const pageNum = Number(page);
    const pageSize = Number(size);
    let wordbooks = [];
    const totalWordbookCount = await Wordbook.countDocuments();
    const totalPage = Math.ceil(totalWordbookCount / pageSize);
  
    require('../../../models/User');
    if (pageNum === 1) {
      wordbooks = await Wordbook
                          .find()
                          .populate({ // populateを使ってWordbookを作成したUserを持ってきます。
                            path: 'user',
                            model: 'User'
                          })
                          .limit(pageSize)
                          .sort({ createdAt: 'desc' });
    } else {
      const skips = pageSize * (pageNum - 1);
      wordbooks = await Wordbook
                          .find()
                          .populate({　// populateを使ってWordbookを作成したUserを持ってきます。
                            path: 'user',
                            model: 'User'
                          })
                          .skip(skips)
                          .limit(pageSize)
                          .sort({ createdAt: 'desc' });
    }
    res.status(200).send({ wordbooks, totalPage });
  } catch (error) {
    console.log(error);
  }
};
// (...)
```
* GET /wordbook endpoint로 api를 호출했을 때 실행되는 handleGetRequest 함수의 코드입니다
* (GET /wordbook endpointにapiを呼び出す時エクセキュートされるhandleGetRequest関数のcodeです。)
  - populate method로 user정보를 가져오고 있는 것을 볼 수 있습니다
  - populate methodで userの情報を持ってきていることを見ることができます。
  - 우선 Wordbook schema안에서 관계를 설정했던 속성(여기서는 user)을 path에 지정하고 있습니다
  - まずWordbook schemaのなかでrelationを設定したpropertie(ここではuser)をpathに指定しています。
  - 그런 다음 관계가 있는 Collection의 이름을 model에 지정하고 있습니다
  - その後、relationがあるCollectionの名前をmodelに指定しています。

---

![react](docs/img/react.png)

* React.js
  - React는 UI를 편리하게 만들고 관리하도록 도와주는 라이브러리 입니다
  - ReactはUIを便利につくって管理するように手伝ってくれるライブラリです。
  - React를 사용하면 DOM을 직접 캐싱하는 등 절차적으로 기술해야 하는 수고가 줄어듭니다
  - Reactを使ったらDOMを直接にcashingするなどの手続き型に述べらなきゃ苦労が減て行きます。
  - 대신 무엇이 있어야 하는지를 기술하는 Declarative programming방식으로 개발 과정보다 결과물 자체(Business logic)에 더 집중할 수 있게 됩니다
  - その代わり、どれがあるかを述べるDeclarative programming方式でプログラミングの課程より結果物の自体(Business logic)にもっと気を詰められるようになります。
  - 그리고 React로 작성된 애플리케이션은 Single Page Application(이하 SPA)이라는 특징을 가지게 됩니다
  - そしてReactで作るアプリケーション은Single Page Application(下略SPA)という特徴を持ちます。
  - SPA는 Modern Web의 Paradigm으로 애플리케이션이 각기 다른 여러 페이지를 제공하는 것이 아닌 하나의 페이지만 가지게 되는 형태를 말합니다
  - SPAはModern WebのParadigmでアプリケーションが其々違うページを提供しないで一ページだけ持ってくる形態を言います。
  - Router별로 다른 페이지를 제공하는 기존의 애플리케이션은 요청 시마다 정적 리소스를 다운받고 전체 페이지를 Rerendering합니다
  - Router別でほかのページを提供する既存のアプリケーションはUserのコールのたびにStatic Resourceをダウンロードして全体のページをRerenderingします。
  - 이는 SPA에 비해 불필요한 트래픽을 늘리고 화면 전체가 새로고침되기 때문에 사용자에게 좋지 못한 경험을 줍니다
  - これはSPAに比べて不必要なトラフィックを増やして画面の全体がRefreshになるせいでUserに良くない経験を差し上げます。
  - SPA는 전체가 하나의 페이지이고 필요할 때마다 부분적인 데이터만 요청하므로 설치해서 사용하는 네이티브 앱과 유사한 User experience를 제공합니다
  - SPAは全体が一ページで必要な時のたびに部分的なデータだけコールするのでインストールして使用するイティブアプリケーションと似合うUser experienceを提供します。
  - React는 SPA를 만드는 라이브러리(혹은 프레임워크) 중 가장 인기가 있기 때문에 Open source의 풍부한 지원을 받을 수 있습니다
  - ReactはSPAを作るライブラリ(あるいわフレームワーク)の中で一番人気があるのでオープンソースの豊かな支援を受けることができます。
  - 게다가 Facebook에서 만든 라이브러리이고 Netflix나 Airbnb 등 전세계적인 기업들이 적극적으로 사용하고 있기 때문에 앞으로의 업데이트와 지원도 기대할 수 있습니다
  - その上、Facebookから作られたライブラリだしNetflixやAirbnbなどのグローバル企業が積極的に使っているおかげでこれからのアップデートと支援も期待できます。

![Next.js](docs/img/nextjs.png)

* Next.js  
  - React는 서버사이드렌더링을 편리하게 지원해주는 Next.js라는 프레임워크를 사용했습니다
  - ReactはSSR(Server Side Rendering)を便利に支援してくれるNext.jsというフレームワークを使いました。

* Node.js, Express.js

```shell
packagemanager install awesome-project
awesome-project start
awesome-project "Do something!"  # prints "Nah."
```

```shell
git clone https://github.com/your/awesome-project.git
cd awesome-project/
packagemanager install
```

```shell
./configure
make
make install
```

```shell
packagemanager deploy awesome-project -s server.com -u username -p password
```

## Features

What's all the bells and whistles this project can perform?
* What's the main functionality
* You can also do another thing
* If you get really randy, you can even do this

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Links

Even though this information can be found inside the project on machine-readable
format like in a .json file, it's good to include a summary of most useful
links to humans using your project. You can include links like:

- Project homepage: https://your.github.com/awesome-project/
- Repository: https://github.com/your/awesome-project/
- Issue tracker: https://github.com/your/awesome-project/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    my@email.com directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!
- Related projects:
  - Your other project: https://github.com/your/other-project/
  - Someone else's project: https://github.com/someones/awesome-project/