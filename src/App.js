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
import ContextApiFunction from './hooks_components/ContextApiFunction';
import RQNavBar from './react-query-commponents/RQNavBar'
import ReactQueryHome from './react-query-commponents/ReactQueryHome'
import RQAbout from './react-query-commponents/RQAbout'
import RQOldMethodGetData from './react-query-commponents/RQOldMethodGetData';
import RQGetData from './react-query-commponents/RQGetData';
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import RQPolling from './react-query-commponents/RQPolling';
import RQFetchDataOnButtonClick from './react-query-commponents/RQFetchDataOnButtonClick';
import SuccessErrorFallBack from './react-query-commponents/SuccessErrorFallBack';
import RQDataTransform from './react-query-commponents/RQDataTransform';
import CustomHookCall from './react-query-commponents/CustomHookCall';
import SingleSuperHero from './react-query-commponents/SingleSuperHero';
import ParallelQueries from './react-query-commponents/ParallelQueries';
const queryClient = new QueryClient();
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
      {/* <ContextApiFunction/> */}
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
      {/* <PropsRender/> */}

      {/* react query  */}
      <RQNavBar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/qr-home' element={<ReactQueryHome />} />
          <Route path='/qr-about' element={<RQAbout />} />
          <Route path='/qr-old-method' element={<RQOldMethodGetData />} />
          <Route path='/qr-load-data-react-query' element={<RQGetData />} />
          <Route path='/qr-poling' element={<RQPolling />} />
          <Route path='/qr-get-data-on-button-click' element={<RQFetchDataOnButtonClick />} />
          <Route path='/qr-success-error-fall-back' element={<SuccessErrorFallBack />} />
          <Route path='/qr-data-transform' element={<RQDataTransform />} />
          <Route path='/qr-custom-hook' element={<CustomHookCall />} />
          <Route path='/qr-query-by-id/:id' element={<SingleSuperHero />} />
          <Route path='/qr-parallel-query' element={<ParallelQueries />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </div>
  );
}

export default App;
