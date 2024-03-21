"use client";
import { Pagination, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function CustomPagination({ count }) {
  const [ page, setPage ] = useState(1);
  const router = useRouter();

  const handlePageChange = (event, value) => {
    setPage(value)
    router.push('/inicio?page=' + value)
  }
  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "end",
        my: "1.5rem",
      }}
    >
      <Pagination count={count} page={page} onChange={handlePageChange} shape="rounded" />
    </Stack>
  );
}

export default CustomPagination;
