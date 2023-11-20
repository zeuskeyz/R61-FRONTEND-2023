import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderSection } from './component/HeaderSection';
import { Narrations } from './component/Narrations';
import { MainSection } from './component/MainSection';
import { FooterSection } from './component/FooterSection';

function App() {

    return (
        <>
          <HeaderSection/>
          <Narrations text = {'How would you rate our services today ?'}/>
          <MainSection/>
          <Narrations text = {'Thank you and Welcome back!'}/>
          <FooterSection/>

        </>
    )
}

export default App
