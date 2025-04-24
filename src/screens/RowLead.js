import React, {useEffect,useState} from 'react';
import {Text, View,FlatList} from 'react-native';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const data=[ 
  { no: 1, name: 'Muhammad Rafeh', age: 21, gender: 'male' },
  { no: 2, name: 'Muhammad Akif', age: 22, gender: 'male' },
  { no: 3, name: 'Muhammad Umar', age: 21, gender: 'male' },
  { no: 4, name: 'Amna Shakeel', age: 22, gender: 'female' },
  { no: 5, name: 'Muhammad Ammar', age: 20, gender: 'male' },
  { no: 6, name: 'Muhammad Moiz', age: 13, gender: 'male' }
]

const RowLead = () => {

  
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
    
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);
  
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>No</DataTable.Title>
          <DataTable.Title numeric>Lead</DataTable.Title>
          <DataTable.Title numeric>Info</DataTable.Title>
          <DataTable.Title numeric>Action</DataTable.Title>
        </DataTable.Header>
  
        <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <DataTable.Row>
          <DataTable.Cell>{item.no}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>{item.age}</DataTable.Cell>
          <DataTable.Cell>{item.gender}</DataTable.Cell>
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

export default RowLead;
