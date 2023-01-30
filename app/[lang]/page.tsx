import Home from "../../components/home/Home";
import getLiterals from "../../libs/getliterals";
import { Locale } from "../../i18n-config";

const App = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const literals = await getLiterals(lang);
  return (
    <>
      <Home literals={literals}/>
    </>
  );

  // return (
  //   <div>
  //     <p>Current locale: {lang}</p>
  //     <p>
  //       This text is rendered on the server:{' '}
  //       {dictionary['server-component'].welcome}
  //     </p>
  //   </div>
  // )
};
export default App;
