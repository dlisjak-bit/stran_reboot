
#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    string razlaga = "";
    string poopy;
    bool alise = true;
    while(alise){
        getline(cin, poopy);
        if(poopy[0] == '@'){
            alise = false;
        }
        else{
            razlaga += poopy + "\n";
        }
    }
    

    string filename = razlaga.substr(26, razlaga.find('}'));

    ofstream myfile;
    myfile.open(filename + ".txt");
    myfile << razlaga;
    myfile.close();

    return 0;

}   