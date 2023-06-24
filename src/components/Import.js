import React from 'react'
import { Container, Button, IconButton, Menu, MenuItem, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const Import = (props) => {
    // fill out this component

    const options = [
        'Delete'
    ]

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
    };

    return (
        <Container><div>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>
                Import
            </Button>
            <h2>Num: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{props.makes.map((make, index) => (
                    <TableRow key={index}>
                        <TableCell>{make.MakeId}</TableCell>
                        <TableCell>{make.MakeName}</TableCell>
                        <TableCell>
                            <MoreVert
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick} />

                        </TableCell>
                    </TableRow>
                ))}


                </TableBody>
            </Table>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={(index) => {
                    props.deleteMake(index);
                    handleClose();
                }}>Delete
                </MenuItem>

            </Menu>
        </div>
        </Container>

    )
}

export default Import