import React from "react";
import { Container } from "react-bootstrap";
import {
  Alert,
  Button,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import  { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";

const AvedanLink = () => {
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  const [success, setSuccess] = useState(false);

  const refreshString = () => {
    setText("");
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const matchCaptcha = (event) => {
    event.preventDefault();
    if (text === captcha) {
      setValid(false);
      setSuccess(true);
    } else {
      setValid(true);
      setSuccess(false);
    }
  };

  return (
    <>
      <Container fluid className="registration mt-5">
        <div
          class="container "
          style={{
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form>
            <div
              class="row jumbotron box8"
              style={{ height: "400px", width: "50vw" }}
            >
              <div class="col-sm-12 mx-t3">
                <div
                  style={{
                    backgroundImage:
                      "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBwcHCA0HDQcHBw0HBwgIBw8IDQcKFREiIiARExMYHSggGCYlGx8TITEhJSkrOi4uFx8zODMtNygtLisBCgoKDQ0NDg0NGCsZHxkrKysrKysrKysrKystKystKysrLSsrKy0rKysrKysrKysrKy0rKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIGBQT/xAAWEAEBAQAAAAAAAAAAAAAAAAAAEQH/xAAbAQEBAQADAQEAAAAAAAAAAAAAAgEDBAYFB//EABcRAQEBAQAAAAAAAAAAAAAAAAABAhH/2gAMAwEAAhEDEQA/AOfSSn6QkkCSQJJAkkCSQJJAkkCSQJJAkkCSQJJAkYozoDDDGXQIYYYi6YIYYYm6YIYYYm6BDDDEXTBFGoYm6HxJJ3lpJAkkCSQJJAkkCSQJJAkkCSQJIxgEYYzoIcwwxN0wQwwxN0CGGGJumCKNQxF0CGGGJumMwxqGJuhmGNQ5iLpjMMahiboeakn1HIkkCSQJJAkkCSQJJAkkCShjOgMMMZaCGGGIumCGGGJumCGGGJuhmGNQxF0wRRqGJuhmGNQxF0xmGNRRN0CGGGJumCGGGIugQwwxN0x5KSfacySQJJAkkCSQJJRgkYYdBDDDE3TBDDDEXQIYYYm6YzDGoYm6GYY1DEXTGYY1DE3QzDGooi6YIYYYm6BDDDE3TBDDDEXQIYYYm6YIYYYi6YIYYYm6HiJJ6BzpJAkkCShjOgMMMZaDMMMMTdMEMMMRdDMMahibpjMMahiLpjMMahiboZhjUUTdMEMMMRdAhhhibpghhhiLoEMMMTdMEMMMTdAhhhiLpghhhiboZhjUMRdMZhjUMTdDn0k9M7CRhjOghzDDE3TBDDDEXQzDGoYm6YzDGoYm6GYY1DEXTGYY1DE3QzDDDEXTBDDDE3QIYYYm6YIYYYi6BDDDE3TBDDDE3TBFGoYi6GYY1DE3TGYY1DEXQzDGoom6YIYYYm6BDDDEXTHO5hhhj1F07IijUMRdDMMahibpjMMahibpjMMahiLoZhhhibpghhhiLoEMOYYm6YIYYYm6BDDDEXTBDDDE3QzDGoYi6YzDGoYm6GYY1DE3TGYY1FEXQIYYYm6YIYYYi6BDmGGJumCGGGJugQwwxF0xzkMahj1F07LMMaiiLpghjUUTdAhhhibpghhhiLoEMMMTdMEMMMRdAijUMTdMZhjUMTdDMMahiLpjMMahibpjMMaiiLoEMMMTdMEMMMTdAhhhiLpghhhiboEMMMRdMEMMMTdAhhhibpjMMahiLoc5DDDHqLp2BDDDE3QIYcwxF0wQwwxN0CGGGIumMwxqGJuhmGNQxN0xmGNQxF0MwxqGJumM5hhhiLoEMMMTdMEMMMTdAhzDDEXTBDDDE3QIYYYi6YIo1DE3TGYY1DE3QzDGoYi6GYY1DE3TGYYYYi6HOwwwx6i6dgQwwxN0MwxqGIumMwxrMMTdMZhjUURdAhhhzE3TBDDDE3QIYYYi6YIYYYm6BmGGGIumCGGGJugQwwxN0xmGNQxF0MwxqGJumMwxqGIuhmGNQxN0xmGGGJugQwwxF0wQwwpugQwwxN0x/9k=')",
                    height: "10vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "3px",
                    borderRadius: "5px",
                  }}
                >
                  <h5 class="text-center text-white mt-3" style={{}}>
                    आवेदन की स्थिति देखें{" "}
                  </h5>
                </div>
              </div>
              <div class="col-sm-12 form-group">
                <label for="name-f">Enter Your Application Number </label>
                <input
                  type="text"
                  class="form-control"
                  name="fname"
                  id="name-f"
                  placeholder="Enter your first name."
                  required
                />
              </div>
              <div class="col-sm-6 form-group">
                {success && (
                  <Alert variant="outlined" sx={{ marginBottom: "20px" }}>
                    Successful
                  </Alert>
                )}
                <div className="card1">
                  
                 

                  <CardContent>
                    <CardActions>
                      <div className="h4">{captcha}</div>
                      <Button
                        startIcon={<RefreshIcon />}
                        onClick={() => refreshString()}
                      ></Button>
                    </CardActions>

                    <form onSubmit={matchCaptcha}>
                      <TextField
                        label="Enter Captcha"
                        focused
                        value={text}
    
                        onChange={(e) => setText(e.target.value)}
                        error={valid}
                        helperText={valid && "Invalid Captcha"}
                      />
                      <br></br>

                      <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        sx={{ marginTop: "20px" }}
                      >
                        Submit
                      </Button>
                    </form>
                  </CardContent>
                </div>
              </div>
              
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default AvedanLink;
