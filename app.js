//FUNCTION COMPONENTS EXERCISE 11.10.21

//1A
function GhostBusters(){
    return `Who you gonna call?`
}
//1B
ReactDOM.render(
<GhostBusters/>, 
document.getElementById(`root`)
)


//2A Couldn't get this to appear....(process of eliminating semicolons...)

function Tagline(){
    return <h1>We're ready to believe you.</h1>;
}

//2B This DID appear!
ReactDOM.render(
<Tagline/>, 
document.getElementById(`root`)
);

//3A ...pending...
function Janine(){
return(
<div>
    <ol>
        <h2>I've quit better jobs than this.</h2>
        <h2>Ghostbusters, whaddya want?</h2>
    </ol>
</div>
);
}
//3b...also pending...
ReactDOM.render(
    <Janine/>,
    document.getElementById(`root`)