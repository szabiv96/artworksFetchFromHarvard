import React from 'react'
import Button from 'react-bootstrap/Button';

export default function RemoveFromFavourite({ deleteR }) {
  return (
    <Button onClick={deleteR}>
        I don't like it!
    </Button>
  )
}
