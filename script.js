/* ������� �� ����:

1) ������� ���������� numberOfFilms � � �� ��������� ����� �� ������������ �� ������:
'������� ������� �� ��� ����������?'

2) ������� ������ personalMovieDB � � ���� ��������� ����� ��������:
    - count - ���� ���������� ����� �� ������ ������
    - movies - � ��� �������� ��������� ������ ������
    - actors - ���� ��������� ������ ������
    - genres - ���� ��������� ������ ������
    - privat - � ��� �������� ��������� boolean(����������) �������� false

3) ������� ������������ �� ��� ���� �������:
    - '���� �� ��������� ������������� �������?'
    - '�� ������� ������� ���?'
������ ����� ��������� � ��������� ����������
�������� ������ � ������ movies � �������: 
    movies: {
        'logan': '8.1'
    }

���������, ����� ��� �������� ��� ������ � ������� */ 

'use strict';

const numberOfFilms = +prompt('Number of films ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One from last films?', ''),
      b = prompt('Rating?', ''),
      c = prompt('One from last films?', ''),
      d = prompt('Rating?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);