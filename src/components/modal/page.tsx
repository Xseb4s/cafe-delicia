import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useModal } from '@/store/modal';
import React from 'react';
import Image from 'next/image';

const Modal = ({children}:{children: React.ReactNode}) => {
    const {modal, modalClose} = useModal()

    return (
        <>
        <Dialog
            open={modal}
            onClose={() => modalClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" >
            {"Para seguir hablando"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {children}
                <figure className='flex justify-center'>
                    <Image src="/icons/cup.webp" alt='cup' width={200} height={200} blurDataURL='blur' className='w-auto h-auto'/>
                </figure>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => modalClose()} autoFocus variant="contained" color="success" className='text-green-600 hover:text-white'>
                Ok
            </Button>
            </DialogActions>
        </Dialog>
        </>
    );
}
export default Modal