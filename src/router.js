import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import App from "./App"
  import Index from "./pages/Index"
  import Show from "./pages/Show"
  import { peopleLoader, showLoader } from "./loaders"
  import { createAction, deleteAction, updateAction } from "./actions"
  import Update from "./pages/Update"
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={peopleLoader} />
        <Route path=":id" element={<Show />}loader={showLoader}/>
        <Route path=":id/update" element={<Update />}loader={showLoader}/>
        <Route path="create" action={createAction} />
        <Route path="delete/:id" action={deleteAction}/>
      </Route>
    )
  )
  
  export default router