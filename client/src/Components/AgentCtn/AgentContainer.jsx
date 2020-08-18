import React, { useState, useEffect } from 'react'
import { readAllUsers } from '../../Services/users'
import { withRouter, Link } from 'react-router-dom'
import './AgentContainer.css'
import { addAgent, deleteAgent } from '../../Services/listings'

function AgentContainer(props) {
  let url = props.location.pathname
  let listingId = props.match.params.id

  const [agentId, setAgentId] = useState(null)

  const handleChange = (e) => {
    const { value } = e.target
    setAgentId(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    addAgent(listingId, agentId)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const { value } = e.target
    console.log(value)
    deleteAgent(listingId, value)
  }

  return (
    <div className="agent-ctn">
      <h3 className="agent-title">Listing Agents</h3>
      {props.agents.map(user =>
        <>
          <div className="agent-ctn-list">
            {user.imgUrl ? <img className="agent-img-listing" src={user.imgUrl} /> : <img className="agent-img-listing" src="https://static.scrum.org/web/images/profile-placeholder.png" />}
            <Link className="agent-name-link" to={`/users/${user.id}`}><p className="agent-name">{user.username}</p></Link>
            <p className="agent-email">{user.email}</p>
            {url.includes('edit') ? (<button value={user.id} className="remove-agent button" onClick={handleClick}>X</button>) : null}
          </div>
        </>)}
      {url.includes('edit') ? (

        <form className="add-agent-lab" onSubmit={handleSubmit}>
          SELECT AGENTS TO ADD: <br />
          <select className="select-agent" onChange={handleChange}>
            <option selected disabled>Add Agent</option>
            {props.allAgents.map(users => (
              <option value={users.id}>{users.username}</option>
            ))}
          </select>
          <button className="button">Add</button>
        </form>
      ) : (<div></div>)
      }
    </div>
  )
}
export default withRouter(AgentContainer)
