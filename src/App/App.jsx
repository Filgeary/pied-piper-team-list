import React from 'react'
import AppInfo from '../components/AppInfo'
import SearchPanel from '../components/SearchPanel'
// import styles from './App.module.css'

const App = () => {
  return (
    <main className='container-lg d-flex flex-column p-4 gap-4'>
      <AppInfo />

      <section>
        <SearchPanel />
      </section>
    </main>
  )
}

export default App
