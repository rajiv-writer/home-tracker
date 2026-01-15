'use client'
import { useState } from 'react'

export default function EditShoppingItem({
  item,
  profiles,
  onClose,
  onSave
}: any) {
  const [name, setName] = useState(item.item_name)
  const [buyer, setBuyer] = useState(item.who_is_buying)

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      zIndex: 2000
    }}
    onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#111',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20
        }}
      >
        <h3>Edit item</h3>

        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <select
          value={buyer}
          onChange={e => setBuyer(e.target.value)}
        >
          {profiles.map((p: any) => (
            <option key={p.id} value={p.id}>
              {p.email}
            </option>
          ))}
        </select>

        <button
          onClick={() => onSave({ name, buyer })}
          style={{ marginTop: 12 }}
        >
          Save
        </button>
      </div>
    </div>
  )
}
