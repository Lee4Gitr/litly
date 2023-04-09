import { Box, Fade, Modal } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


export interface DialogProps {
  allowClose?: boolean;
  contents: React.ReactNode;
  open: boolean;
  setOpen: (val: boolean) => void;
}

const Dialog = ({
  allowClose = true,
  contents,
  open,
  setOpen,
}: DialogProps) => {

  const dialog = useRef<HTMLDivElement>(null);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Fade in={open}>
        <Box sx={style}>
          <div
            onClick={({ target }) => {
              if (!allowClose || dialog.current?.contains(target as any)) {
                return;
              }
              setOpen(false);
            }}
            onKeyDown={({ key }) => {
              if (!allowClose || key !== "Escape") {
                return;
              }
              setOpen(false);
            }}
          >
            <div>
              <div>
                <div ref={dialog}>
                  {contents}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>)
}

export default Dialog