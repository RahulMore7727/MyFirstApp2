import React, {useEffect,useState} from 'react';
import {Text, View,FlatList} from 'react-native';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const data=[ 
  { no: 1, lead: 'Muhammad Rafeh', info: 7219026773, action:'Follow up' },
  { no: 2, lead: 'Muhammad Akif', info: 7219026773, action:'Follow up' },
  { no: 3, lead: 'Muhammad Umar', info: 7219026773, action:'Follow up' },
  { no: 4, lead: 'Amna Shakeel', info: 7219026773, action:'Follow up' },
  { no: 5, lead: 'Muhammad Ammar', info: 7219026773, action:'Follow up' },
  { no: 6, lead: 'Muhammad Moiz', info: 7219026773, action:'Follow up' }
]

const OverdueLead = () => {

  
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
    
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);
  
    return (
      <DataTable>
        <DataTable.Header>
          
          <DataTable.Title numeric>lead</DataTable.Title>
          <DataTable.Title numeric>info</DataTable.Title>
          <DataTable.Title numeric>Action</DataTable.Title>
        </DataTable.Header>
  
        <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DataTable.Row>
          <DataTable.Cell>{item.no}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.contact}</DataTable.Cell>
          <DataTable.Cell>{item.type}</DataTable.Cell>
          <DataTable.Cell>{item.action}</DataTable.Cell>
        </DataTable.Row>
        // <Item title={item.name} />
        )}
       
      />
        {/* <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>6.0</DataTable.Cell>
        </DataTable.Row>
  
        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row> */}
  
        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
        />
      </DataTable>
    );
 

};

export default OverdueLead;
