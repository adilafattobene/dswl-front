import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import EditIcon from "@material-ui/icons/Edit";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalBook(props) {
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    props.setOpenModal(true);
  };

  const handleClose = () => {
    props.setOpenModal(false);
  };

  const book = {
    id: props.book.id,
    name: props.book.name,
    author: props.book.author,
    pages: props.book.pages,
    child: props.book.child,
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p>Alterar o Livro:</p>
      <form onSubmit={props.onBookEdit}>
        <input type="hidden" id="id" value={book.id} disabled />
        <input type="text" id="name" defaultValue={book.name}/>
        <input
          type="text"
          id="author"
          defaultValue={book.author}
        />
        <input
          type="text"
          id="pages"
          defaultValue={book.pages}
        />
        <input
          type="text"
          id="child"
          defaultValue={book.child}
        />
        <input type="submit" value="Alterar" />
      </form>
    </div>
  );

  return (
    <div>
      <EditIcon onClick={handleOpen} />
      <Modal
        open={props.openModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
