"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import CharSelDialog from "../dialog/CharSel";
import ClassSelDialog from "../dialog/ClassSel";
import EblmSelDialog from "../dialog/EblmSel";
import type { Literals, CharProps } from "@/types/fetypes";
import { useState } from "react";
import GeneralStatsTables from "../table/GeneralStatsTable";
import BasicStatsTables from "../table/BasicStatsTable";
import CombatStatsTables from "../table/CombatStatsTable";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Character({ literals }: CharProps) {
  const [genarlStats, setGeneralStats] = useState<string>();
  const [basicStats, setBasicStats] = useState<string>();
  const [combatStats, setCombatStats] = useState<string>();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom align="center">
        {literals.index.character}
      </Typography>

      <Grid container spacing={2} marginTop={2}>
        <Grid container xs={12} sm={12} md={2} lg={2} spacing={1}>
          <Grid xs={4} sm={4} md={12} lg={12}>
            <Item variant="outlined" sx={{ p: 0 }}>
              <Box
                id="charname"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                <CharSelDialog literals={literals} />
              </Box>
            </Item>
          </Grid>
          <Grid xs={4} sm={4} md={12} lg={12}>
            <Item variant="outlined" sx={{ p: 0 }}>
              <Box
                id="charclass"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                <ClassSelDialog literals={literals} />
              </Box>
            </Item>
          </Grid>
          <Grid xs={4} sm={4} md={12} lg={12}>
            <Item variant="outlined" sx={{ p: 0 }}>
              <Box
                id="emblem"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                <EblmSelDialog literals={literals} />
              </Box>
            </Item>
          </Grid>
          {/* <Item>Email subscribe section</Item> */}
        </Grid>
        <Grid container xs={12} md={10} lg={10} spacing={2}>
          <GeneralStatsTables literals={literals} />
          <BasicStatsTables literals={literals} />
          <CombatStatsTables literals={literals} />
        </Grid>
        {/* <Grid container xs={12} md={10} lg={10} spacing={2}>
          {Object.entries(literals.stats.categories).map(([k, v]) => (
            <Grid xs={12} sm={6} md={3} lg={3} key={`${k.toLowerCase()}grid`}>
              <Item>
                <Box
                  id={k.toLowerCase()}
                  sx={{ fontSize: "12px", textTransform: "uppercase" }}
                >
                  {v}
                </Box>
                <Box component="ul" aria-labelledby={k.toLowerCase()} sx={{ pl: 0 }}>
                {Object.entries(literals.stats[k as Stats]).map(
                      ([kk, vv]) => (
                        <Button
                          variant="text"
                          sx={{ width: "100%", fontSize: "12px", textTransform:"capitalize" }}
                          onClick={() => {
                            setStat(vv);
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

          <Grid xs={12} sm={6} md={3} lg={3}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                {literals.stats.categories.general}
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 0 }}>
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category B
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 0 }}>
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <Item>
              <Box
                id="category-c"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category C
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 0 }}>
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={12} sm={6} md={3} lg={3}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category D
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 0 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </Item>
          </Grid>
        </Grid> */}
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>
              Designed by{" "}
              <Link
                underline="hover"
                href="https://github.com/NessajCN"
                fontSize={12}
              >
                @NessajCN
              </Link>
            </Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Link A</Item>
            </Grid>
            <Grid>
              <Item>Link B</Item>
            </Grid>
            <Grid>
              <Item>Link C</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
