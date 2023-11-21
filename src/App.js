import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderSection } from './component/HeaderSection';
import { Narrations } from './component/Narrations';
import { MainSection } from './component/MainSection';
import { FooterSection } from './component/FooterSection';
import { Results } from './component/Results';

function App() {
    return (
        <>
          <HeaderSection/>
          <Narrations text = {'How would you rate our services today ?'}/>
          <MainSection/>
          <Results/>
          <FooterSection/>
        </>
    )
}

export default App
