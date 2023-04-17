import "./calculator.css";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

function Calculator() {
  const [result, setResult] = useState("");
  const click = (e) => {
    let resultLast_letter = result.charAt(result.length - 1);
    let Arr=["-","+","*","/","."]
    setResult(result.concat(e.target.value));
    console.log("result", result);
  };
  const Key=(e)=>{
    console.log(e.target.value)
    console.log("result", result);
  }
  const clear = () => {
    setResult("");
    document.getElementById("err").innerHTML = "";
  };
  const del = () => {
    document.getElementById("err").innerHTML = "";

    setResult(result.slice(0, -1));
  };
  const equal = () => {
    if(result){

        console.log("result", result);
        // console.log("result",typeof(result))
        let resultFirst_letter = result.charAt(0);
        let resultLast_letter = result.charAt(result.length - 1);
        let Arr=["-","+","*","/","."]
        for(let i=0;i<result.length;i++){
            let consequent = result.charAt(i);
            let next = result.charAt(i+1);
            for(let j=0;j<Arr.length;j++){

                if(consequent === Arr[j] && next === Arr[j]){
                    console.log(consequent,next)
                    document.getElementById("err").innerHTML = "Please Enter Valid Expression";
                }else{
                    document.getElementById("err").innerHTML = "";
                }
            }
        }
        
        if (
            resultFirst_letter === "-" ||
      resultFirst_letter === "+" ||
      resultFirst_letter === "*" ||
      resultFirst_letter === "/" ||
      resultFirst_letter === "." ||
      resultLast_letter === "-" ||
      resultLast_letter === "+" ||
      resultLast_letter === "*" ||
      resultLast_letter === "/" ||
      resultLast_letter === "."
      ) {
          document.getElementById("err").innerHTML =
          "Please Enter Valid Expression";
        } else {
            setResult(eval(result).toString());
            document.getElementById("err").innerHTML = "";
        }
    }
    };
    return (
    <>
      <h2 className="heading">Calculator</h2>

      <Box
        sx={{ flexGrow: 1 }}
        style={{ width: "400px", margin: "auto", textAlign: "center" }}
      >
        <Input
          style={{ width: "280px", marginBottom: "10px", textAlign: "right" }} type="text"
          value={result}
          onKeyDown={() => setResult(result.toString())} 
        />
        <br />
        <span
          style={{
            width: "280px",
            marginBottom: "10px",
            textAlign: "center",
            color: "red",
          }}
          id="err"
        ></span>
        <Grid
          container
          style={{
            textAlign: "center",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={3}>
            <Button variant="outlined" value="9" onClick={click}>
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" value="8" onClick={click}>
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" value="7" onClick={click}>
              7
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            textAlign: "center",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={3}>
            <Button variant="outlined" value="6" onClick={click}>
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" value="5" onClick={click}>
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" value="4" onClick={click}>
              4
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            textAlign: "center",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={3}>
            <Button variant="outlined" value="3" onClick={click}>
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" value="2" onClick={click}>
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" value="1" onClick={click}>
              1
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            textAlign: "center",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={3}>
            <Button variant="outlined" value="0" onClick={click}>
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" value="." onClick={click}>
              .
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" value="+" onClick={click}>
              +
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          style={{
            textAlign: "center",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={3}>
            <Button variant="outlined" value="-" onClick={click}>
              -
            </Button>
          </Grid>

          <Grid item xs={3}>
            <Button variant="outlined" value="*" onClick={click}>
              X
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" value="/" onClick={click}>
              /
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            textAlign: "center",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={3}>
            <Button variant="outlined" onClick={del}>
              DEL
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={clear}>
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" onClick={equal}>
              =
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Calculator;
