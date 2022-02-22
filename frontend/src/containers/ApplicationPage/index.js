const ApplicationPage = ()=>{
    return <>
        <Header />

        <Routes>
          <Route path="/feed" element={<RegisterPage />} />
          <Route path="/profile" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <div>
                <Link to="/register">Registrer bruker</Link>
              </div>
            }
          />
        </Routes>
    </>
}