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
import DynamicQuery from './react-query-commponents/DynamicQuery';
import DependQuery from './react-query-commponents/DependQuery';
import PaginatedQuery from './react-query-commponents/PaginatedQuery';
import DataSubmit from './react-query-commponents/DataSubmit';
import MainBar from './fromik_components/MainBar';
import SimpleForm from './fromik_components/SimpleForm';
import FormikUseHook from './fromik_components/FormikUseHook';
import FormikInitialValue from './fromik_components/FormikInitialValuePage';
import FormikInitialValuePage from './fromik_components/FormikInitialValuePage';
import ErrorMessage from './fromik_components/ErrorMessage';
import YupValidationFormikPage from './fromik_components/YupValidationFormikPage';
import ReducingFormikCode from './fromik_components/ReducingFormikCode';
import FormikComponent from './fromik_components/FormikComponent';
import NestedObjects from './fromik_components/NestedObjects';
import FieldArrayComponent from './fromik_components/FieldArrayComponent';
import FieldLevelVaildation from './fromik_components/FieldLevelVaildation';
import ManuallyTrigeringValidation from './fromik_components/ManuallyTrigeringValidation';
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
      {/* <RQNavBar />
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
          <Route path='/qr-dynamic-query' element={<DynamicQuery herorIds={[1, 2]} />} />
          <Route path='/qr-depend-query' element={<DependQuery userEmail='admin@admin.com' />} />
          <Route path='/qr-paginated-query' element={<PaginatedQuery />} />
          <Route path='/qr-submit-query' element={<DataSubmit />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider> */}

      {/* formik start code */}
      <MainBar />
      <Routes>
        <Route path='/simple-form' element={<SimpleForm />} />
        <Route path='/use-formik' element={<FormikUseHook />} />
        <Route path='/use-formik-initial-value' element={<FormikInitialValuePage />} />
        <Route path='/use-formik-error' element={<ErrorMessage />} />
        <Route path='/use-formik-yup-error' element={<YupValidationFormikPage />} />
        <Route path='/use-formik-reducing-code' element={<ReducingFormikCode />} />
        <Route path='/use-formik-formik-component' element={<FormikComponent />} />
        <Route path='/use-formik-nested-object' element={<NestedObjects />} />
        <Route path='/use-formik-array-field' element={<FieldArrayComponent />} />
        <Route path='/use-formik-field-level-validation' element={<FieldLevelVaildation />} />
        <Route path='/use-formik-manually-trigering-validation' element={<ManuallyTrigeringValidation />} />
      </Routes>
    </div>
  );
}

export default App;
