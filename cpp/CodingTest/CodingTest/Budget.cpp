//���� : https://programmers.co.kr/learn/courses/30/lessons/12982

//S�翡���� �� �μ��� �ʿ��� ��ǰ�� ������ �ֱ� ���� �μ����� ��ǰ�� �����ϴµ� �ʿ��� �ݾ��� �����߽��ϴ�.
//�׷���, ��ü ������ ������ �ֱ� ������ ��� �μ��� ��ǰ�� ������ �� ���� �����ϴ�.
//�׷��� �ִ��� ���� �μ��� ��ǰ�� ������ �� �� �ֵ��� �Ϸ��� �մϴ�.
//
//��ǰ�� ������ �� ���� �� �μ��� ��û�� �ݾ׸�ŭ�� ��� ������ ��� �մϴ�.
//���� ��� 1, 000���� ��û�� �μ����� ��Ȯ�� 1, 000���� �����ؾ� �ϸ�, 
//1, 000������ ���� �ݾ��� ������ �� ���� �����ϴ�.
//
//�μ����� ��û�� �ݾ��� ����ִ� �迭 d�� ���� budget�� �Ű������� �־��� ��, 
//�ִ� �� ���� �μ��� ��ǰ�� ������ �� �ִ��� return �ϵ��� solution �Լ��� �ϼ����ּ���.

//d�� �μ����� ��û�� �ݾ��� ����ִ� �迭�̸�, ����(��ü �μ��� ����)�� 1 �̻� 100 �����Դϴ�.
//d�� �� ���Ҵ� �μ����� ��û�� �ݾ��� ��Ÿ����, �μ��� ��û �ݾ��� 1 �̻� 100, 000 ������ �ڿ����Դϴ�.
//budget�� ������ ��Ÿ����, 1 �̻� 10, 000, 000 ������ �ڿ����Դϴ�.

#include <iostream>
#include <vector>

using namespace std;

vector<int> sort(vector<int> d) {



    return d;
}

int solution(vector<int> d, int budget) {
    int answer = 0;
    int all = 0;

    //1. sorting
    sort(d);

    //2. �ִ� ���� ���� �μ� ���� ����


    return answer;
}

int main() {

    //�μ��� ��û�� �ݾ� (1 ~ 100000)
    vector<int> d = { 1, 3, 2, 5, 4 };
    int budget = 9; //����

    solution(d, budget);

    return 0;
}