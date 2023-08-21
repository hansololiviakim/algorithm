/* * 힙(Heap)
 * - 특정한 규칙을 가진 이진 트리 형태의 자료구조로,
 *   주로 우선순위 큐나 정렬과 같은 작업을 효율적으로 처리하기 위해 사용한다.
 *
 * - 이진 트리란 각 노드가 최대 두 개의 자식을 가지는 트리를 말한다.
 * - 우선순의 큐는 데이터를 우선순위에 따라 관리하는 자료구조이다.
 *   일반적인 큐와 달리, 큐에 들어오는 순서가 아니라 각 요소의 우선순위에 따라 정렬된다.
 *   보통은 작은 값이 우선순위가 더 높다고 간주되지만 구현에 따라 우선순위를 정의할 수 있다.
 *   작업 스케줄링, 네트워크 트래픽 관리, 최단 경로 탐색 등 다양한 분야에서 활용될 수 있다.
 *
 * - 힙은 주로 최댓값이나 최솟값을 빠르게 찾아내는데 사용되며,
 *   특정한 규칙을 따르기 때문에 효율적인 연산이 가능하다.
*/

/* * 힙의 특징
 * 1. 최대 힙(Max Heap)
 * - 각 노드의 값이 그 자식 노드의 값보다 크거나 같은 힙 구조이다.
 * - 즉, 부모 노드는 자식 노드보다 크거나 같은 값을 갖는다.
 * - 최대 힙의 루트 노드는 트리 전체에서 가장 큰 값을 가지게 된다.
 *
 * 2. 최소 힙(Min Heap)
 * - 각 노드의 값이 그 자식 노드의 값보다 작거나 같은 힙 구조이다.
 * - 즉, 부모 노드는 자식 노드보다 작거나 같은 값을 갖는다.
 * - 최소 힙의 루트 노드는 트리 전체에서 가장 작은 값을 가지게 된다.
*/

/* * 자바스크립트에서의 힙
 * - 자바스크립트에서 힙을 구현할 때는 배열을 사용한다.
 * - 힙의 특성 상, 노드의 인덱스를 이용해서 부모와 자식 노드 간의 관계를 쉽게 파악할 수 있다.
 * - [3, 7, 1, 8, 5]라는 배열을 최소 힙으로 나타낸다면, 트리 형태로는 다음과 같다.
         1
      /   \
     5     3
    / \
   8   7
* - 위의 힙에서는 루트 노드인 1이 가장 작은 값이며, 부모 노드의 값은 항상 자식 노드의 값보다 작거나 같다.
* - 이런 구조로 되어있기 때문에 최솟값을 찾는 연산을 O(1)의 시간 복잡도로 수행할 수 있다.
*/

// 최소 힙
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() { return this.heap.length; }
    
    peek() { return this.heap[0]; }
    
    push(value) {
        // 힙의 맨 뒤에 push
        this.heap.push(value);
        // value가 push된 위치
        let index = this.heap.length - 1;
        
        // 오름차순 정렬
        while (
            index > 0 &&
            this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
        ) {
            // Math.floor((idx - 1) / 2) : idx의 부모 노드
            const temp = this.heap[index];
            this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
            this.heap[Math.floor((index - 1) / 2)] = temp;
            index = Math.floor((index - 1) / 2);
        }
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const minValue = this.heap[0];
        // 끝에 있는 노드를 부모로 지정
        this.heap[0] = this.heap.pop();
        let index = 0;
        
        // 오름차순 정렬
        // 왼쪽 자식이 힙 길이보다 작을 때까지
        while (index * 2 + 1 < this.heap.length) {
            // 오른쪽 자식 < 힙 길이 &7 오른쪽 자식 < 왼쪽 자식 ? 오른쪽 자식 : 왼쪽 자식
            let minChildIndex =
                (index * 2 + 2 < this.heap.length
                && this.heap[index * 2 + 2] < this.heap[index * 2 + 1])
                ? index * 2 + 2 : index * 2 + 1;
            
            if (this.heap[index] < this.heap[minChildIndex]) {
                break;
            }
            
            const temp = this.heap[index];
            this.heap[index] = this.heap[minChildIndex];
            this.heap[minChildIndex] = temp;
            index = minChildIndex;
        }
        
        return minValue;
    }
}

const solution = (scocille, K) => {
    const minHeap = new MinHeap();
    
    for (const sco of scocille) {
        minHeap.push(sco);
    }
    
    let mixedCount = 0;
    
    // 힙 안에 음식이 2개 이상 있고, 스코빌 지수가 가장 작은 음식의 수치가 K보다 작을 때까지 반복
    while (minHeap.size() >= 2 && minHeap.peek() < K) {
        // 스코빌 지수가 가장 작은 두 음식 섞기
        const first = minHeap.pop();
        const second = minHeap.pop();
        const mixedFood = first + second * 2;
        minHeap.push(mixedFood);
        mixedCount++;
    }
    
    return minHeap.peek() >= K ? mixedCount : -1;
}