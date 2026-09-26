import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamMagmaSCamerupt_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Numel";
  public hp: number = 80;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Overheat", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your discard pile for a basic Energy card and attach it to Team Magma's Camerupt. Put 2 damage counters on Team Mamga's Camerupt. This power can't be used if Team Magma's Camerupt is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flame Ball", cost: [], damage: "50", text: "You may move a Fire Energy card attached to Team Magma's Camerupt to 1 of your Benched Pokémon." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Camerupt";
  public fullName: string = "Team Magma's Camerupt MA 19";
  public text: string = "Team Magma's Camerupt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
