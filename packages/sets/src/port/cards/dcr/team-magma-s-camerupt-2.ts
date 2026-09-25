import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class TeamMagmaSCamerupt_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Numel";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Burning Draft", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may attach a Fighting or Fire Energy card from your discard pile to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flame Ball", cost: [], damage: "60", text: "Move a basic Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "DCR";
  public name: string = "Team Magma's Camerupt";
  public fullName: string = "Team Magma's Camerupt DCR 2";
  public text: string = "Team Magma's Camerupt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
