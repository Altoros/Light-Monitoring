var query = {     
  "start": "35mi-ago",    
  "tags": [{ 
    "name": "EnginePlant:Light",        
    "limit": 20000
  }]};
  
msg.payload = query;
return msg;
