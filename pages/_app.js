import '../style.css';
import MainContainer from '../Components/MainContainer';

export default function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>      
  )    
}