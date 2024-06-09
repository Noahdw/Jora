
import { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TicketViewer from '../components/TicketViewer';
import BugList from '../components/BugList';
import TicketView from '../components/TicketView';
import { WebSocketContext } from '../components/WebSocketProvider';

export default function Index({ }) {
  let [allBugData, setAllBugData] = useState([{title: "123", desc: "321"}])
  let [bugScreenVisible, setBugScreenVisible] = useState(false)
  const {socket, subscribe, unsubscribe} = useContext(WebSocketContext)

  useEffect(() => {
      subscribe("BugReport", onBugListChange)
      return () => {
        unsubscribe("BugReport", onBugListChange)
      }
    }
  , []) 

  function onBugListChange(event) {
    const {title, desc} = event.detail
    setAllBugData(prevData => (
      [...prevData,
        {title: title, desc: desc}]
    ))
  }

  function createNewBug() {
    setBugScreenVisible(prev => !prev)
    console.log(bugScreenVisible)
  } 

  function onBugSubmit(bugData) {
    createNewBug()
    socket.send(JSON.stringify({...bugData, type: "BugReport"}));
  }

  function onBugCancel() {
    createNewBug()
  }

  return (
    <section className='space-y-4' >
      <Header createBug={createNewBug} className="w-full" />
      <div className='flex flex-row space-x-4'>
        <BugList className="" allData={allBugData}></BugList>
        <TicketView ></TicketView>
      </div>
      <div className='fixed inset-0 flex items-start justify-center p-16 pointer-events-none'>
        {bugScreenVisible && <TicketViewer submit={onBugSubmit} cancel={onBugCancel} className=""></TicketViewer>}
      </div>
    </section>
  );
}