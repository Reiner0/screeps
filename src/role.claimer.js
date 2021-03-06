module.exports = {
  run = (creep) => {
    if (creep.room.name != creep.memory.target) {
      var exit = creep.room.findExitTo(creep.memory.target);
      creep.moveTo(creep.pos.findClosestByRange(exit));
    } else {
      if (creep.room.controller) {
        if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
        } else if (creep.claimController(creep.room.controller) == ERR_GCL_NOT_ENOUGH) {
          if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
          }
        }
      }
    }
  }
};
