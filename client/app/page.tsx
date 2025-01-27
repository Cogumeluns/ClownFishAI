"use client";
import Header from '../app/components/Header/Header';
import HandlerToSendText from './api/HandlerToSendText/HandlerToSendText';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

export default function Home() {
  const {data, setData, loading, generateImage} = HandlerToSendText();
  return (
    <div>
      <Header loading={loading} generateImage={generateImage} />
      <Body data={data} setData={setData} />
      <Footer/>
    </div>
  );
}
