import Home from "../../components/home/Home";
import getLiterals from "../../libs/getliterals";
import { Locale } from "../../i18n-config";
import Character from "@/components/attrib/Character";

const App = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const literals = await getLiterals(lang);
  return (
    <>
      <Home literals={literals}>
        <Character literals={literals} />
      </Home>
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
