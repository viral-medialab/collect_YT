import React from "react";
import bayesDataYT from "./bayes_small/bayes_data_yt.json";
import bayesDataYTVenn from "./bayes_small/bayes_data_yt_venn.json";
import bayesDataYTTree from "./bayes_small/bayes_data_yt_tree.json";
import bayesDataYTForm from "./bayes_small/bayes_data_yt_formula.json";
import HoverVideoPlayer from 'react-hover-video-player';
import "./index.css";
import "./App.css";
import PremiumCard from "./PremiumCard";

let container = {
    columnCount: "4",
    width: "100%"
}

let Wrapper = {
    fontFamily: "sans-serif",
    textAlign: "center",
    width: "full",
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "slateblue",
    padding: "10px"
}

let col = {
    width: "25%",
    // backgroundColor: "seagreen",
    padding: "20px",
    margin: "30px",
    justifyContent: "start",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
}

let topic = {
    position: "relative",
    display: "inline-block",
    padding: "8px 20px",
    marginTop: "15px",
    background: "white",
    color: "black",
    borderRadius: "20px",
    textDecoration: "none",
    fontWeight: "500",
    boxShadow: "0 5px 15px rgb(0 0 0 / 50%)"
}

function WoK(){
    return (
        <div style={Wrapper}>
            <div style={col}>
                <h4 style={topic}><b>Introduction</b></h4>
                <PremiumCard data={bayesDataYT}/>
            </div>
            <div style={col}>
                <h4 style={topic}><b>Venn</b></h4>
                <PremiumCard data={bayesDataYTVenn}/>
            </div>
            <div style={col}>
                <h4 style={topic}><b>Tree</b></h4>
                <PremiumCard data={bayesDataYTTree}/>
            </div>
            <div style={col}>
                <h4 style={topic}><b>Formula</b></h4>
                <PremiumCard data={bayesDataYTForm}/>
            </div>
        </div>      
    )
}

export default WoK;