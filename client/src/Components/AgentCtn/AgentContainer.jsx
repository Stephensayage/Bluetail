import React, { useState, useEffect } from 'react'
import { readAllUsers } from '../../Services/users'
import { withRouter } from 'react-router-dom'

function AgentContainer(props) {

  let url = props.location.pathname
  console.log(props.agents)

  return (
    <div className="agent-ctn">
      <h3 className="agent-title">Listing Agents</h3>
      {props.agents.map(user =>
        <>
          <div className="agent-ctn-list">
            <img className="agent-img-listing" src={user.imgUrl} />
            <p className="agent-name">{user.username}</p>
          </div>
        </>)}
      {url.includes('new') || url.includes('edit') ? (
        <label className="add-agent-lab">
          Add Agent:
          <select>
            <option selected disabled>Select Agents</option>
            {props.allAgents.map(user => (
              <option>{user.username}</option>
            ))}
          </select>
        </label>) : (<div></div>)
      }
    </div>
  )
}
export default withRouter(AgentContainer)