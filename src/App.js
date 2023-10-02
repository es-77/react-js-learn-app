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

function App() {
  return (
    <div className="App">
      <TopBar />
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/get-id/:id' element={<GetIdToUrl />} />
        {/* <Route path='*' element={<ErrorPage />} /> */}
        <Route path='*' element={<Navigate to='/' />} />
        {/* route grouping  */}
        <Route path='/admin' element={<TopBar />}>
          <Route path='/admin/home' element={<Home />} />
          <Route path='/admin/about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
