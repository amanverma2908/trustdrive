import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { DocumentPlusIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export function Documents() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="mt-10">
      <div>
        <Button
          onClick={handleOpen}
          variant="gradient"
          color="purple"
          size="md"
        >
          <DocumentPlusIcon className="-mt-1 mr-1 inline-block h-5 w-5" />
          Upload new document
        </Button>
        <Dialog open={open} handler={handleOpen} className="h-auto">
          <DialogHeader> Select Document Files to Upload.</DialogHeader>
          <DialogBody className="h-auto">
            <Input
              className="h-auto py-4"
              type="file"
              label="Select files"
              color=""
            ></Input>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="purple" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <div className="my-12 grid grid-cols-1 gap-y-5 gap-x-2 md:grid-cols-2 xl:grid-cols-3">
        <Card className="w-32">
          <DocumentTextIcon className="mx-auto w-20" />
          <CardFooter className="p-2 ">
            <Typography className="truncate text-xs">Document 1.pdf</Typography>
          </CardFooter>
        </Card>
        <Card className="w-32">
          <DocumentTextIcon className="mx-auto w-20" />
          <CardFooter className="p-2 ">
            <Typography className="truncate text-xs">Document 1.pdf</Typography>
          </CardFooter>
        </Card>
        <Card className="w-32">
          <DocumentTextIcon className="mx-auto w-20" />
          <CardFooter className="p-2 ">
            <Typography className="truncate text-xs">Document 1.pdf</Typography>
          </CardFooter>
        </Card>
        <Card className="w-32">
          <DocumentTextIcon className="mx-auto w-20" />
          <CardFooter className="p-2 ">
            <Typography className="truncate text-xs">Document 1.pdf</Typography>
          </CardFooter>
        </Card>
        <Card className="w-32">
          <DocumentTextIcon className="mx-auto w-20" />
          <CardFooter className="p-2 ">
            <Typography className="truncate text-xs">Document 1.pdf</Typography>
          </CardFooter>
        </Card>
        <Card className="w-32">
          <DocumentTextIcon className="mx-auto w-20" />
          <CardFooter className="p-2 ">
            <Typography className="truncate text-xs">Document 1.pdf</Typography>
          </CardFooter>
        </Card>
        <Card className="w-32">
          <DocumentTextIcon className="mx-auto w-20" />
          <CardFooter className="p-2 ">
            <Typography className="truncate text-xs">Document 1.pdf</Typography>
          </CardFooter>
        </Card>
        <Card className="w-32">
          <DocumentTextIcon className="mx-auto w-20" />
          <CardFooter className="p-2 ">
            <Typography className="truncate text-xs">Document 1.pdf</Typography>
          </CardFooter>
        </Card>
        <Card className="w-32">
          <DocumentTextIcon className="mx-auto w-20" />
          <CardFooter className="p-2 ">
            <Typography className="truncate text-xs">Document 1.pdf</Typography>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}

export default Documents;
