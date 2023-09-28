
export default function Dashboard() {

  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;
  const Input = () => <div />;
  const Table = () => <div />;
  const TableContainer = () => <div />;
  const Tbody = () => <div />;
  const Th = () => <div />;
  const Thead = () => <div />;
  const Tr = () => <div />;
 
  return (
    <div>
        <div className="sortingButtons">
          <Button className = "sortByRentAsc" >  Sort by Asc </Button>
          <Button className = "sortByRentDesc"> Sort by Desc </Button>
        </div>

        <Input className = "searchAddress"  placeholder = "Search Data" />


        <TableContainer>
          <Table className="table">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Owner's Name</Th>
                <Th>Address</Th>
                <Th>Area Code</Th>
                <Th>Rent</Th>
                <Th>Bachelor Tenants Allowed</Th>
                <Th>Married Tenants Allowed</Th>
              </Tr>
            </Thead>
            <Tbody> 
              Map the below container against your data
              {/* <Tr className = "houseDetails"  >
                  <Td className = "name" ></Td>
                  <Td className = "ownersName" ></Td>
                  <Td className = "address" ></Td>
                  <Td className = "areaCode" ></Td>
                  <Td className = "rent" ></Td>
                  <Td className = "isBachelorAllowed" ></Td>
                  <Td className = "isMarriedAllowed" ></Td>
                  <Td className = "delete" > Delete </Td>
              </Tr> */}
            </Tbody>
          </Table>
        </TableContainer>
    </div>
  )
}
