// https://www.youtube.com/watch?v=YKav6SG9iTk
// This is not complete solution as it is just for practice.

import React, { useState } from 'react';

const Body = () => {

    const [player, setPlayerName] = useState();
    const [masterTeam, setMasterTeam] = useState([]);
    const [playingTeam, setPlayingTeam] = useState([]);
    const upDatePlayerName = (e) => {
        setPlayerName(e.target.value);
    }
    const addToMasterTeam = () => {
        if (player) {
            console.log(player);
            console.log(masterTeam);
            const curMasterTeam = masterTeam;
            curMasterTeam.push(player)
            setMasterTeam(curMasterTeam);
            setPlayerName();
            document.getElementById('player').value = '';
        }
    }

    const addToPlaying = (index) => {
        const newPlayer = masterTeam[index];
        const currentPlaying = playingTeam;
        currentPlaying.push(newPlayer);
        setPlayingTeam(currentPlaying);
    }


    return (
        <div>
            <div>
                <input placeholder='Enter Name' onChange={upDatePlayerName} id='player' />
                <button onClick={addToMasterTeam}>Add</button>
            </div>
            <div>
                Master Team
                <>List :
                <br />       
                {masterTeam.map((item,index) => {
                    console.log(item,index);
                    return (
                        <>
                            <li>{item}</li><button onClick={() => addToPlaying(index)}>Add</button><button>Delete</button>
                        </>
                    )
                })}</>
            </div>
            <div>
                Playing Team
                <>List :
                <br />       
                {playingTeam.map((item) => {
                    console.log(item);
                    return (
                        <>
                            <li>{item}</li>
                        </>
                    )
                })}</>
            </div>
        </div>
    );
}

export default Body;