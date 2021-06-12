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
    <Form.Group>
      {
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
      }

      {
        editing ? (
          <>
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
          </>
        ) : (
          <Button onClick={() => setEditing(true)} variant="success">
            Add
          </Button>
        )
      }
    </Form.Group>
  )
}

export default DamageReportSubForm
