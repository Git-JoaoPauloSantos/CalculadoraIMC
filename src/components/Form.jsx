import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { CssBaseline, TextField, Button } from '@mui/material'
import { Box } from "@mui/system";

import Msgs from "../data/msgs";
import Result from "./Result";

const Form = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null)
  const [isDisabled, setIsDisabled] = useState(true)
  const [msg, setMsg] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    const imc = Number(weight / height ** 2).toFixed(2)
    setResult(imc)

  }

  const resetInputs = () => {
    setWeight('')
    setHeight('')
    setResult('')
  }

  useEffect(() => {
    if (result >= 40) {
      setMsg(Msgs[5])
    }
    else if (result >= 35) {
      setMsg(Msgs[4])
    }
    else if (result >= 30) {
      setMsg(Msgs[3])
    }
    else if (result >= 25) {
      setMsg(Msgs[2])
    }
    else if (result >= 18.5) {
      setMsg(Msgs[1])
    }
    else if (result < 18.5) {
      setMsg(Msgs[0])
    }

  }, [result])

  useEffect(() => {
    if (weight > 0 && height > 0) {
      setIsDisabled(false)
    }
    else {
      setIsDisabled(true)
    }
  }, [weight, height])


  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <Box maxWidth="sm">
          <Grid container spacing={3}>
            <Grid xs={12}>
              <TextField value={weight}
                type="number"
                fullWidth
                id="weight"
                label="Peso"
                onChange={(e) => setWeight(e.target.value)} />
            </Grid>
            <Grid xs={12}>
              <TextField value={height}
                type="number"
                fullWidth
                id="height"
                label="Altura"
                onChange={(e) => setHeight(e.target.value)} />
            </Grid>

            {result && <Result result={result} msg={msg} />}

          </Grid>
        </Box>
        <Box maxWidth="sm">
          <Grid container spacing={3}>
            <Grid xs={6}>
              <Button color="info"
                onClick={resetInputs} variant="outlined">Resetar</Button>
            </Grid>
            <Grid xs={6}>
              <Button disabled={isDisabled}
                color='primary'
                fullWidth
                onClick={handleSubmit} variant="contained">Calcular</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Form