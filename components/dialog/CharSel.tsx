"use client";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import type { Literals, CharProps } from "@/types/fetypes";

import charsdata from "@/assets/dataparsed/Chars.json";

type CharKeys = keyof Literals["characters"];
type Chars = keyof typeof charsdata;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CharSelDialog({
  literals,
  setCharStatBase,
}: CharProps) {
  const [open, setOpen] = useState(false);
  const [char, setChar] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="text" sx={{ width: "100%" }} onClick={handleClickOpen}>
        {char || literals.index.character}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>{literals.characters.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {literals.characters.description}
          </DialogContentText>
          <Grid container spacing={2} marginTop={2}>
            {Object.entries(literals.characters.faction).map(([k, v]) => (
              <Grid xs={12} sm={6} md={3} xl={2} key={`${k.toLowerCase()}grid`}>
                <Item>
                  <Box
                    id={k.toLowerCase()}
                    sx={{ fontSize: "14px", textTransform: "uppercase" }}
                  >
                    {v}
                  </Box>
                  <Box
                    component="ul"
                    aria-labelledby={k.toLowerCase()}
                    sx={{ pl: 0 }}
                  >
                    {Object.entries(literals.characters[k as CharKeys]).map(
                      ([kk, vv]) => (
                        <Button
                          variant="text"
                          sx={{
                            width: "100%",
                            fontSize: "12px",
                            textTransform: "capitalize",
                          }}
                          onClick={() => {
                            setChar(vv);
                            const chardata = charsdata[kk as Chars];
                            const charbase = {
                              lvl: Number(chardata["Level"]),
                              intnllvl: Number(chardata["Internal Level"]),
                              hp: Number(chardata["HP Base"]),
                              bld: Number(chardata["Bld Base"]),
                              sp: Number(chardata["SP"]),
                              mov: Number(chardata["Mov Base"]),
                              str: Number(chardata["Str Base"]),
                              mag: Number(chardata["Mag Base"]),
                              dex: Number(chardata["Dex Base"]),
                              spd: Number(chardata["Spd Base"]),
                              def: Number(chardata["Def Base"]),
                              res: Number(chardata["Res Base"]),
                              lck: Number(chardata["Lck Base"]),
                              rating: 0,
                            };
                            charbase.rating =
                              charbase.str +
                              charbase.mag +
                              charbase.dex +
                              charbase.spd +
                              charbase.def +
                              charbase.res +
                              charbase.lck +
                              charbase.bld;
                            setCharStatBase && setCharStatBase(charbase);
                          }}
                          key={kk.toLowerCase()}
                        >
                          {vv}
                        </Button>
                      )
                    )}
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
