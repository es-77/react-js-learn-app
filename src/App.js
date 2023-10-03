import logo from './logo.svg';
import './App.css';
import StateHook from './hooks_components/StateHook';
import UseEffectHook from './hooks_components/UseEffectHook';
import UseContextHook from './hooks_components/UseContextHook';
import UseReducerHook from './hooks_components/UseReducerHook';
import UseMemoHook from './hooks_components/UseMemoHook';
import UseCallBackHook from './hooks_components/UseCallBackHook';
import UseRefHook from './hooks_components/UseRefHook';
import UseImperativeHook from './hooks_components/UseImperativeHook';
import UseLayoutEffectHook from './hooks_components/UseLayoutEffectHook';
import UseLoggerHook from './hooks_components/UseLoggerHook';
import UseDebugValueHook from './hooks_components/UseDebugValueHook';
import UseLocalStorageHook from './hooks_components/UseLocalStorageHook';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/routing_components/Home';
import About from './components/routing_components/About';
import TopBar from './components/nav_bar_components/TopBar';
import ErrorPage from './components/routing_components/ErrorPage';
import GetIdToUrl from './components/routing_components/GetIdToUrl';
import ContactPage from './components/routing_components/ContactPage';
import LinkStateData from './components/routing_components/LinkStateData';
import Class from './components/routing_components/decentant_components/Class';
import ArrowFunction from './function_components/ArrowFunction';
import ExportDefaultOrExport, { MyFunction1, MyFunction2 } from './function_components/ExportDefaultOrExport';
import PropsEvent from './function_components/PropsEvent';
import ChildToParentDataPass from './function_components/ChildToParentDataPass';
import MapFunction from './function_components/MapFunction';
import HigherOrderComponents from './function_components/HigherOrderComponents';
import PropsRender from './function_components/PropsRender';

function App() {
  return (
    <div className="App">
      {/* <StateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseImperativeHook /> */}
      {/* <UseLayoutEffectHook /> */}
      {/* <UseLoggerHook /> */}
      {/* <UseDebugValueHook /> */}
      {/* <UseLocalStorageHook /> */}
      {/* <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/get-id/:id' element={<GetIdToUrl />} />
        <Route path='/contact-page' element={<ContactPage />} />
        <Route path='/state-data' element={<LinkStateData />} /> */}
        {/* <Route path='/class/*' element={<Class />} /> */}
        {/* <Route path='*' element={<ErrorPage />} /> */}
        {/* <Route path='*' element={<Navigate to='/' />} /> */}
        {/* route grouping  */}
        {/* <Route path='/admin' element={<TopBar />}>
          <Route path='/admin/home' element={<Home />} />
          <Route path='/admin/about' element={<About />} />
        </Route>
      </Routes> */}

      {/* function components  */}
      {/* <ArrowFunction/> */}
      {/* <ExportDefaultOrExport/>
      <MyFunction1/>
      <MyFunction2/> */}
      {/* <PropsEvent/> */}
      {/* <ChildToParentDataPass/> */}
      {/* <MapFunction/> */}
      {/* <HigherOrderComponents/> */}
      <PropsRender/>
    </div>
  );
}

export default App;
