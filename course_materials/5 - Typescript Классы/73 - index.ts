enum TransferStatus {
	Pending = "pending",
	Rejected = "rejected",
	Completed = "completed",
}

enum ErrorMessages {
	NotFound = "Not found: 404",
	NotEnoughSpace = "Not enough space: 507",
	Forbidden = "Forbidden: 403",
}

interface ITransfer {
	path: string;
	data: string[];
	date?: Date;
	start: (p: string, d: string[]) => string;
	stop: (reason: string) => string;
}

interface TransferError {
	message: ErrorMessages;
}

// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer {

    // Место для реализаций

    // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
    // Можно вывести в консоль данные, можно вернуть строку

    // Необходимо создать метод, который будет останавливать передачу данных
    // И возвращать строку с причиной и датой остановки (Дата в любом формате)

    // Необходимо создать метод, который будет возвращать строку, содержащую
    // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
    // Метод может показаться странным, но может использоваться для тестов, например

}
