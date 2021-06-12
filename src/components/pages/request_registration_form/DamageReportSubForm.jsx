import { Button, Form } from "react-bootstrap"

import { useState } from "react"

const DamageItemForm = ({ damage, setDamage, onDelete }) => {
  const [editing, setEditing] = useState(false)

  return (
    <Form.Group>
      <Form.Control
        disabled={!editing}
        value={damage}
        onChange={({ target }) => setDamage(target.value)}
        type="text"
        placeholder="Describe Damage"
      />
      {
        editing ? (
          <Button onClick={() => setEditing(false)} variant="success">
            Save
          </Button>
        ) : (
          <>
            <Button onClick={() => setEditing(true)} variant="warning">
              Edit
            </Button>
            <Button onClick={onDelete} variant="danger">
              Remove
            </Button>
          </>
        )
      }
    </Form.Group>
  )
}

const DamageReportSubForm = ({ damageReport = [], setDamageReport }) => {
  const { damages } = damageReport
  const [editing, setEditing] = useState(false)
  const [newDamage, setNewDamage] = useState("")

  return (
    <>
      <Form.Group>
        <Form.Label>Reported Damages:</Form.Label>
        {
          damages.length > 0 ? (
            damages.map((damage, i) => (
              <DamageItemForm
                key={`damage-${i}`}
                damage={damage}
                setDamage={damage => {
                  let copy = [...damages]

                  copy[i] = damage

                  setDamageReport(old => ({ ...old, damages: copy }))
                }}
                onDelete={() => setDamageReport(old => ({ ...old, damages: damages.splice(i, 1) }))} />
            ))
          ) : (
            <Form.Text>No Damages Reported</Form.Text>
          )
        }
      </Form.Group>

      {
        editing ? (
          <Form.Group>
            <Form.Control
              value={newDamage}
              onChange={({ target }) => setNewDamage(target.value)}
              type="text"
              placeholder="Describe Damage"
            />
            <Button onClick={() => {
              setEditing(false)
              setDamageReport(old => ({
                ...old,
                damages: [...damages, newDamage]
              }))
              setNewDamage("")
            }} variant="success">
              Save
          </Button>
          </Form.Group>
        ) : (
          <Button onClick={() => setEditing(true)} variant="success">
            Add
          </Button>
        )
      }
    </>
  )
}

export default DamageReportSubForm
