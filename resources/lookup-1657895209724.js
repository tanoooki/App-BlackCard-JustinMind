(function(window, undefined) {
  var dictionary = {
    "f85f583f-32d0-4585-9894-0e3c61e8891c": "mesa criada",
    "e7c773ac-84c3-4812-bafc-443a80473325": "novidades",
    "1a79dc14-9c3d-428c-ae00-a78aa86ac5f3": "montar mesa",
    "eccc8036-d2f2-46fb-bd2c-10311ae0fe0c": "nova mesa",
    "1c22a7b8-f3e9-46d5-844d-b0f9aca67f14": "locação",
    "96904e05-2d25-4677-bbc5-02c13ad96fff": "torneio",
    "8a51657d-83bb-458c-9093-2027d1c6903e": "WBTWL",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "6d23f50e-f3d7-4bf8-8074-4fb85d7ed7ca": "enviado",
    "07fd4e10-c730-4ad8-bfa9-25785aa1504e": "loja",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);