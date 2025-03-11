import Header from "./components/Header"
import Entry from "./components/Entry"
import entryData from "./data"

export default function App() {
  const entryElements = entryData.map((entry) => {
    return <Entry
              key={entry.id} 
              img={entry.img} 
              country={entry.country} 
              googleMapsLink={entry.googleMapsLink}
              title={entry.title} 
              dates={entry.dates} 
              text={entry.text}
            />
  });

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}